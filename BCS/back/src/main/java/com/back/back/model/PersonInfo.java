package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "PERSON_INFO")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PersonInfo {

    @Id
    @GeneratedValue
    @Column(name = "PERSON_INFO_ID")
    private Long id;

    @Column(name = "SEX")
    private String sex;

    @Column(name = "PERSONAL_STATUS")
    private String personalStatus;

    @Column(name = "MAIN_JOB")
    private String mainJob;

    @Column(name = "FOREIGN_WORKER")
    private String foreignWorker;

    @Column(name = "PRESENT_EMPLOYMENT")
    private String presentEmployment;

    @Column(name = "AGE")
    private Integer age;

    @OneToMany(mappedBy = "personInfo",cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<Telephone> aTelephones;

    @OneToMany(mappedBy = "personInfo",cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<Property> aProperty;

    @OneToMany(mappedBy = "personInfo",cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<Housing> aHousing;

    @OneToMany(mappedBy = "personInfo",cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<OtherInstallmentPlans> aOtherInstallmentPlans;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "PERSON_QUALITIES_ID")
    private PersonQualities personQualities;

    @OneToOne(mappedBy = "personInfo", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Predict predict;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "PERSON_CREDIT_INFORMATION_STATUS_ID")
    @JsonIgnore
    private PersonCreditInformationStatus personCreditInformationStatus;

    @OneToMany(mappedBy = "personInfo",cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<CreditInfo> creditInfos;


}