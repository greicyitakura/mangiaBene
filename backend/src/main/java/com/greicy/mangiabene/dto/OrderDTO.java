package com.greicy.mangiabene.dto;

import com.greicy.mangiabene.entities.Category;
import com.greicy.mangiabene.entities.Order;
import com.greicy.mangiabene.entities.OrderStatus;
import com.greicy.mangiabene.entities.Product;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class OrderDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @NotBlank(message = "Campo obrigatório")
    private String address;

    @NotBlank(message = "Campo obrigatório")
    private Double latitude;

    @NotBlank(message = "Campo obrigatório")
    private Double longitude;

    private Instant moment;

    @NotBlank(message = "Campo obrigatório")
    private OrderStatus status;

    private List<ProductDTO> products = new ArrayList<>();

    public OrderDTO(){
    }

    public OrderDTO(Long id, String address, Double latitude, Double longitude, Instant moment, OrderStatus status,
                    List<ProductDTO> products) {
        this.id = id;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.moment = moment;
        this.status = status;
    }

    public OrderDTO(Order entity) {
        id = entity.getId();
        address = entity.getAddress();
        latitude = entity.getLatitude();
        longitude = entity.getLongitude();
        moment = entity.getMoment();
        status = entity.getStatus();
    }

    public OrderDTO(Order entity, Set<Product> products) {
        this(entity);
        products.forEach(cat -> this.products.add(new ProductDTO(cat)));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Instant getMoment() {
        return moment;
    }

    public void setMoment(Instant moment) {
        this.moment = moment;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public List<ProductDTO> getProducts() {
        return products;
    }


}
