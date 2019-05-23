package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "PROPERTY")
@Data
public class Property {
    @Id
    @GeneratedValue
    @Column(name = "PROPERTY_ID")
    private Long id;

    @Column(name = "PROPERTY")
    private String property;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PERSON_INFO_ID")
    @JsonIgnore
    private PersonInfo personInfo;
}
