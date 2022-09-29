package com.greicy.mangiabene.service;

import com.greicy.mangiabene.dto.CategoryDTO;
import com.greicy.mangiabene.dto.OrderDTO;
import com.greicy.mangiabene.entities.Category;
import com.greicy.mangiabene.entities.Order;
import com.greicy.mangiabene.entities.Product;
import com.greicy.mangiabene.repositories.CategoryRepository;
import com.greicy.mangiabene.repositories.OrderRepository;
import com.greicy.mangiabene.service.exceptions.DatabaseException;
import com.greicy.mangiabene.service.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;


@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public Page<OrderDTO> findAllPaged(Pageable pageable) {
		Page<Order> list = repository.findAll(pageable);
		return list.map(OrderDTO::new);
	}

//	@Transactional(readOnly = true)
//	public OrderDTO findById(Long id) {
//		Optional<Order> obj = repository.findById(id);
//		Order entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
//		return new OrderDTO(entity, entity.getProducts());
//	}
//
//	@Transactional(readOnly = true)
//	public OrderDTO insert(OrderDTO dto) {
//		Order entity = new Order();
//		copyDtoToEntity(dto, entity);
//
//		entity = repository.save(entity);
//
//		return new OrderDTO(entity);
//	}
//
//
//	@Transactional
//	public OrderDTO update(Long id, OrderDTO dto) {
//		try {
//			Order entity = repository.getOne(id);
//			copyDtoToEntity(dto, entity);
//			entity = repository.save(entity);
//
//			return new OrderDTO(entity);
//			}
//			catch(EntityNotFoundException e) {
//				throw new ResourceNotFoundException("Id not found " + id);
//		}
//	}
//
//	public void delete(Long id) {
//		try {
//		repository.deleteById(id);
//		}
//		catch(EmptyResultDataAccessException e) {
//			throw new ResourceNotFoundException("Id not found " + id);
//		}
//		catch(DataIntegrityViolationException e) {
//			throw new DatabaseException("Integrity violation");
//		}
//	}
//
//
//	private void copyDtoToEntity(OrderDTO dto, Order entity) {
//		entity.setName(dto.getName());
//		entity.setDescription(dto.getDescription());
//		entity.setDate(dto.getDate());
//		entity.setImgUrl(dto.getImgUrl());
//		entity.setPrice(dto.getPrice());
//
//		entity.getCategories().clear();
//
//		for(CategoryDTO catDto : dto.getCategories()) {
//			Category category = categoryRepository.getOne(catDto.getId());
//			entity.getCategories().add(category);
//		}
//
//	}
}
