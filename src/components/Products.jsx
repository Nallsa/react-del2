import React, { useState } from 'react';
import fakeDatabase from '../fakeDotabase.js';

function Products() {
  const [products, serProducts] = useState(fakeDatabase);

  function hendelDel(id) {
    const prodFilter = products.filter(item => item.id !== id);

    serProducts(prodFilter);
    // serProducts(products.filter(item => {item.id !== id}));
  }

  return (
    <div className='my-2'>
      <table className='table'>
        <thead className='thead'>
          <tr className='tr-head'>
            <th>Превью</th>
            <th>Товар</th>
            <th>Цена</th>
            <th>В наличие</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {products.map(i => {
            return (
              <tr>
                <td>
                  <img src={i.image} className='img-tbody' alt='' />
                </td>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>{i.inStock ? 'да' : 'нет'}</td>
                <td>
                  <button
                    onClick={() => {
                      hendelDel(i.id);
                    }}
                  >
                    удалить
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
