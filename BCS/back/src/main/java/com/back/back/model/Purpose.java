package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "PURPOSE")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class    Purpose {
    @Id
    @GeneratedValue
    @Column(name = "PURPOSE_ID")
    private Long id;

    @Column(name="PURPOSE")
    private String purpose;

    @ManyToMany(mappedBy = "purposes")
    @JsonIgnore
    private List<CreditInfo> creditInfos;

}
