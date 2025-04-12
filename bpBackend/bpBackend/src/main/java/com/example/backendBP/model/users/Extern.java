package com.example.backendBP.model.users;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entita uchovavajuca data o externistoch.
 */
@Entity
@DiscriminatorValue("EXTERN")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Extern extends Teacher {
    private String companyName;
    private String address;
    private String username;
    private String password;
}
