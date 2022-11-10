INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_category (name, created_At) VALUES ('Entradas', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Massas', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Risotos', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Bebidas', NOW());
INSERT INTO tb_category (name, created_At) VALUES ('Sobremesa', NOW());

INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Antepastos', 32.5, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Bruschetta', 29.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Bruschetta al crudo, servida com mussarela de búfala, tomate, rúcula e presunto cru.', 'https://github.com/greicyitakura/mangiaBene/blob/main/pitII/imagens/bruschettas.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Burrata', 39.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Burrata ao molho pesto com tomate-cereja confitado, minirrúcula e torradas.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/burrata.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Macarrão Espaguete', 45.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Macarrão fresco espaguete com molho especial e tempero da casa.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/espaguete.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Lasanha a Bolonhesa', 49.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Camadas intercaladas da nossa deliciosa massa caseira, com molho bolonhesa e molho bechamel, presunto e muito queijo derretido.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/lasanha.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Nhoque ao 4 queijos', 59.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Massa fresca de nhoque, ao molho de bechamel com uma seleção exclusiva de queijos regionais.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/nhoque.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Conchiglione', 39.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Massa fresca recheado com a mais saborosa carne, acompanhado com o molho à napolitana feito com tomates organicos, alho, orégano, azeite, manteiga e salsinha.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/conchiglione.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Risoto Funghi', 59.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Risoto Funghi feito com ingredientes finos e o toque especial do chef.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/risoto_funghi.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Risoto de Camarão', 72.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Risoto de camarões selecionados com especiarias típicas e um delicioso molho de acompanhamento.', 'https://github.com/greicyitakura/mangiaBene/blob/main/pitII/imagens/risotoCamarao.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Risoto de Alho poró', 52.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Risoto de alho poro feito com ingredientes frescos e selecionados com o toque especial de limão.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/risotoAlhoPoro.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Água', 2.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Garrafa de água mineral podendo ser com ou sem gás.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/agua.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Vinho Tinto', 22.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Taça do melhor vinho tinto da casa', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/vinhoTinto.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Vinho Branco', 20.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Taça do melhor vinho branco da casa', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/vinhobranco.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Refrigerante', 6.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Refrigerante em lata, podendo ser coca-cola, sprit, ou kuat.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/refri.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Suco Natural', 9.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Suco natural de frutas da estação.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/suco.png?raw=true');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Tiramissu', 26.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Nossa deliciosa receita tradicional, leva camadas de biscoitos champagne embebidos no café da casa, e camadas de queijo mascarpone cobertos com uma fina camada de cacau em pó.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/tiramissu.png');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Cannoli', 34.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Nossa massa leve e crocante, em opção com recheio tradicional de creme de ricota e pistache ou nutella. Contém 2 unidades.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/canolli.png');
INSERT INTO tb_product (name, price, date, description, img_url) VALUES ('Panna Cotta', 26.9, TIMESTAMP WITH TIME ZONE '2022-07-13T20:50:07.12345Z', 'Nossa típica sobremesa Piemontese a base de creme de leite fresco, com morangos e redução de balsâmico.', 'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/pannaCota.png');


INSERT INTO tb_product_category (product_id, category_id) VALUES (1, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (2, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (3, 1);
INSERT INTO tb_product_category (product_id, category_id) VALUES (4, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (5, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (6, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (7, 2);
INSERT INTO tb_product_category (product_id, category_id) VALUES (8, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (9, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (10, 3);
INSERT INTO tb_product_category (product_id, category_id) VALUES (11, 4);
INSERT INTO tb_product_category (product_id, category_id) VALUES (12, 4);
INSERT INTO tb_product_category (product_id, category_id) VALUES (13, 4);
INSERT INTO tb_product_category (product_id, category_id) VALUES (14, 4);
INSERT INTO tb_product_category (product_id, category_id) VALUES (15, 4);
INSERT INTO tb_product_category (product_id, category_id) VALUES (16, 5);
INSERT INTO tb_product_category (product_id, category_id) VALUES (17, 5);
INSERT INTO tb_product_category (product_id, category_id) VALUES (18, 5);


INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -22.946779, -43.217753, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T15:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -25.439787, -49.237759, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T16:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T12:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T08:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T14:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T09:00:00Z');

INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 8);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 3);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 7);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 5);