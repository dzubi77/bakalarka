package com.example.backendBP.other.DTO;

import com.example.backendBP.model.users.Extern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ExternDTO {
    private String name;
    private String surname;
    private String company;
    private String address;
    private String email;
    private String degree1;
    private String degree2;

    public ExternDTO(Extern extern) {
        this.name = extern.getName();
        this.surname = extern.getSurname();
        this.company = extern.getCompanyName();
        this.address = extern.getAddress();
        this.email = extern.getEmail();
        this.degree1 = extern.getDegree1();
        this.degree2 = extern.getDegree2();
    }
}
