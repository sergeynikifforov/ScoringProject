package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "HOUSING")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Housing {
    @Id
    @GeneratedValue
    @Column(name = "HOUSING_ID")
    private Long id;

    @Column(name = "HOUSING")
    private String housing;

    @Column(name = "PRESENT_RESIDENCE")
    private Long presentResidence;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "PERSON_INFO_ID")
    @JsonIgnore
    private PersonInfo personInfo;
}
