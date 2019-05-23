package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "PERSON_QUALITIES")
public class PersonQualities {
    @Id
    @GeneratedValue
    @Column(name = "PERSON_QUALITIES_ID")
    private Long id;

    @Column(name = "OUTFIT")
    private String outfit;

    @Column(name = "ALIGNMENT")
    private String alignment;

    @Column(name = "POLITENESS")
    private String politeness;

    @Column(name = "HONESTLY")
    private Boolean honestly;

    @Column(name = "STATE")
    private String state;

    @OneToMany(mappedBy = "personQualities", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<PersonInfo> personInfo;

}
