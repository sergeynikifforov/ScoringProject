package com.back.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "PERSON_CREDIT_INFORMATION_STATUS")
@AllArgsConstructor
@NoArgsConstructor
public class PersonCreditInformationStatus {
    @Id
    @GeneratedValue
    @Column(name = "PERSON_CREDIT_INFORMATION_STATUS_ID")
    private Long id;

    @Column(name = "SAVING_ACCOUNT")
    private String savingAccount;

    @Column(name = "STATUS_OF_EXISTING_CHECKING_ACCOUNT")
    private String sOECA;

    @Column(name = "INSTALLMENT_RATE_IN_PERCENTAGE_OF_DISPOSABLE_INCOME")
    private Double iRiPoDIncome;

    @Column(name = "NUMBER_OF_CREDIT")
    private Long numberOfCredit;

    @OneToOne(mappedBy = "personCreditInformationStatus",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private PersonInfo personInfo;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "CREDIT_HISTORY",
                joinColumns =@JoinColumn(name = "CREDIT_HISTORY_ID"),
                inverseJoinColumns = @JoinColumn(name = "PERSON_CREDIT_INFORMATION_STATUS_ID")
    )
    @JsonIgnore
    private List<CreditHistory> creditHistories;
}
