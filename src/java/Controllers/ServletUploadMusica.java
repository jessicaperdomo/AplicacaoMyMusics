package Controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@MultipartConfig(
    location="/", 
    fileSizeThreshold=1024*1024,    // 1MB *      
    maxFileSize=1024*1024*100,      // 100MB **
    maxRequestSize=1024*1024*10*10  // 100MB ***
)

@WebServlet(name = "servlet_upload", urlPatterns = {"/servlet_upload"})
public class ServletUploadMusica extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = response.getWriter();        
        String estilo = request.getParameter("estilos");
        String nome = request.getParameter("nome");
        String artista = request.getParameter("artista");
        
        
        Part filePart = request.getPart("arquivo");
       

        OutputStream out = null;
        InputStream filecontent = null;
        
        try {  
            String novonome=estilo+"_"+nome+"_"+artista+".mp3";
            
            out = new FileOutputStream(new File(getServletContext().getRealPath("/")+"/"+novonome));
            
            filecontent = filePart.getInputStream();
            
            int read = 0;
            byte[] bytes = new byte[1024];
            
            while ((read = filecontent.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            
            writer.println("Novo arquivo " + novonome + " criado com sucesso");
            
            out.close();
            filecontent.close();
            writer.close();
            
        } catch (Exception fne) {
            writer.println("Erro ao receber o arquivo");
            writer.println("<br/> ERRO: " + fne.getMessage());
        }

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
