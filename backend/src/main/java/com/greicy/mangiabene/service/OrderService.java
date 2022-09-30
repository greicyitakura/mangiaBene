package com.greicy.mangiabene.service;

import com.greicy.mangiabene.dto.OrderDTO;
import com.greicy.mangiabene.dto.ProductDTO;
import com.greicy.mangiabene.entities.Order;
import com.greicy.mangiabene.entities.OrderStatus;
import com.greicy.mangiabene.entities.Product;
import com.greicy.mangiabene.repositories.OrderRepository;
import com.greicy.mangiabene.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(OrderDTO::new).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);

		for (ProductDTO p : dto.getProducts()){
			Product product = productRepository.getReferenceById(p.getId());
			order.getProduct().add(product);
		}

		order = repository.save(order);
		return new OrderDTO(order);
	}

	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getReferenceById(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
