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
@Table(name = "CREDIT_HISTORY")
public class CreditHistory {
    @Id
    @GeneratedValue
    @Column(name = "CREDIT_HISTORY_ID")
    private Long id;

    @Column(name = "CREDIT_HISTORY")
    private String creditHistory;

    @ManyToMany(mappedBy = "creditHistories")
    @JsonIgnore
    private List<PersonCreditInformationStatus> personCreditInformationStatuses;
}
