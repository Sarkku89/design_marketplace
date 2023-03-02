import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Row, Col, Form, Button } from 'react-bootstrap';
import itemService from '../services/item';

const AddItem = ({ showMessage }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [imgurl, setImgUrl] = useState('');
  const navigate = useNavigate();
  //const seller = JSON.parse(window.localStorage.getItem('loggedMarketplaceUser'));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //console.log(seller)
      await itemService.create({
        name,
        description,
        category,
        price,
        imgurl,
        //seller
      });

      showMessage('Item successfully added!', `${name} added.`, 'success');
      navigate('/products');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Row style={{ padding: '60px' }} xs={1} sm={1} md={1} lg={2}>
      <Col>
        <Stack
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <h3 style={{ fontWeight: 'bold' }}>Add item</h3>
          <p style={{ fontSize: '17px' }}>
            Write the details of the item you wish to sell.
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="name" id="choosecat">
              <Form.Control
                value={name}
                placeholder="Name"
                onChange={({ target }) => setName(target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imgurl">
              <Form.Control
                value={imgurl}
                placeholder="Write image URL"
                onChange={({ target }) => setImgUrl(target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write a description of your item"
                value={description}
                onChange={({ target }) => setDescription(target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
              <Form.Select
                onChange={({ target }) => setCategory(target.value)}
                aria-label="Choose a category"
              >
                <option>Category</option>
                <option value="Furniture">Furniture</option>
                <option value="Decoration">Decoration</option>
                <option value="Carpets">Carpets</option>
                <option value="OtherTextile">Other textile</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Price"
                value={price}
                onChange={({ target }) => setPrice(target.value)}
                type="text"
              />
            </Form.Group>
            <Button
              style={{ float: 'right' }}
              type="submit"
              id="savebtn"
              onClick={onSubmit}
            >
              Save
            </Button>
          </Form>
        </Stack>
      </Col>
      <Col>
        <img
          className="singleimage"
          alt="table"
          src="https://www.next.co.uk/nxtcms/resource/blob/5366004/311110dfa9fef7c66ce7d69a25c69d54/dining-data.jpg"
        ></img>
      </Col>
    </Row>
  );
};

export default AddItem;
