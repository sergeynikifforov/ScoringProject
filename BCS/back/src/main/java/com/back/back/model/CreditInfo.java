package com.back.back.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "CREDIT_INFO")
@AllArgsConstructor
@NoArgsConstructor
public class CreditInfo {
    @Id
    @GeneratedValue
    @Column(name = "CREDIT_INFO_ID")
    private Long id;

    @Column(name = "DURATION")
    private Long duration;

    @Column(name = "CREDIT_AMOUNT")
    private Long creditAmount;

    @Column(name = "OTHER_DEBTORS")
    private String otherDebtors;

    @Column(name = "NUMBER_OF_PEOPLE_BEING_LIABLE_TO_PROVIDE_MAINTENANCE_FOR")
    private Long numberOfPeopleBeingLiableToProvideMaintenanceFor;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    @JoinTable(name = "PURPOSE",
            joinColumns =@JoinColumn(name = "PURPOSE_ID"),
            inverseJoinColumns = @JoinColumn(name = "CREDIT_INFO_ID")
    )
    private List<Purpose> purposes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PERSON_INFO_ID")
    @JsonIgnore
    private PersonInfo personInfo;
}
