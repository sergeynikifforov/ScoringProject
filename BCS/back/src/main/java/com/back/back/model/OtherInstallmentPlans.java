package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "OTHER_INSTALLMENT_PLANS")
public class OtherInstallmentPlans {

    @Id
    @GeneratedValue
    @Column(name = "OTHER_INSTALLMENT_PLANS_ID")
    private Long id;

    @Column(name = "OTHER_INSTALLMENT_PLAN")
    private String otherInstallmentPlan;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "PERSON_INFO_ID")
    @JsonIgnore
    private PersonInfo personInfo;

}
