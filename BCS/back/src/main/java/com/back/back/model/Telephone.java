package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TELEPHONE")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Telephone {
    @Id
    @GeneratedValue
    @Column(name = "TELEPHONE_ID")
    private Long id;

    @Column(name = "TELEPHONE")
    private String telephone;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "PERSON_INFO_ID")
    @JsonIgnore
    private PersonInfo personInfo;

    public Telephone(Long id, String telephone){
        super();
        this.id = id;
        this.telephone = telephone;
    }
}
