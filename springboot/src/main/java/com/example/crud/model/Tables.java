package com.example.crud.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tbl_table")
public class Tables {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "number")
  private Integer number;

  @Column(name = "capacity")
  private Integer capacity;

  @Column(name = "status")
  private String status;
}
