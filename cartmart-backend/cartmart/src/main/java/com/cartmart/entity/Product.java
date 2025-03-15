package com.cartmart.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "PRODUCT")  // Explicitly mapping to database table
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_seq")
    @SequenceGenerator(name = "product_seq", sequenceName = "PRODUCT_SEQ", allocationSize = 1)
    @Column(name = "ID", nullable = false)  // Ensuring column name matches database
    private Long id;

    @Column(name = "NAME", length = 255, nullable = false)
    private String name;

    @Column(name = "PRICE", nullable = false)
    private double price;

    @Column(name = "DISCOUNT", nullable = false)
    private double discount;

    @Column(name = "IMAGE_URL", length = 255)
    private String imageUrl;
}
