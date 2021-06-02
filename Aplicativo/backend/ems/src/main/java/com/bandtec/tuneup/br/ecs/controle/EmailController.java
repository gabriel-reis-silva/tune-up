package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.EnvioEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/envia-email")
@RestController
@CrossOrigin
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;


    @PostMapping
    public ResponseEntity sendMail(@RequestBody EnvioEmail novoEmail) {
        if (!novoEmail.equals(null)) {
            SimpleMailMessage message = new SimpleMailMessage();
            System.out.println(novoEmail);
            message.setText("Mensagem: " + novoEmail.getTexto() + "\n" +
                    "Data: " + novoEmail.getData() + "\n" +
                    "Horário: " + novoEmail.getHorario());
            message.setTo("gabriel.reis1945@gmail.com");
            message.setFrom("suporte.tuneup@gmail.com");
            message.setSubject("Contato via site");
            System.out.println(message);
            try {
                mailSender.send(message);
                return ResponseEntity.status(201).build();
//            return "Email enviado com sucesso!";
            } catch (Exception e) {
                e.printStackTrace();
//            return "Erro ao enviar email.";
            }
        }
        return ResponseEntity.status(400).build();
    }
}
