package com.example.backendBP.model.users;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "userType"
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = Teacher.class, name = "TEACHER"),
        @JsonSubTypes.Type(value = Student.class, name = "STUDENT"),
        @JsonSubTypes.Type(value = Extern.class, name = "EXTERN")
})
@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public abstract class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String name;
    private String surname;
    @Column(name = "username")
    private String username;
    private String password;
}
