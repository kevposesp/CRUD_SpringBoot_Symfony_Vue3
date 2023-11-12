package com.example.crud.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tbl_tables")
public class Tables {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tableId;
    @Column(name = "number_table", unique = true, nullable = false)
    private Number numberTable;
    private Number capacityTable;
    private String statusTable;
}
