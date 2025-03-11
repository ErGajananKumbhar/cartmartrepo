package com.cartmart.repository;// src/main/java/com/example/ecommerce/repository/ProductRepository.java

import com.cartmart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}