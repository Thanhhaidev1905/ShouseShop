import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="cartProductItem">
      {/* Message */}
      <h3>
        <span class="badge amber darken-2">Mua Hàng Thành Công !</span>
      </h3>
      {/* Cart */}

      <section class="section">
        <div class="table-responsive">
          <table class="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>
                  <h5>
                    <strong> Product item </strong>
                  </h5>
                </td>
                <td>15$</td>
                <td class="center-on-small-only">
                  <span class="qty">1 </span>
                  <div class="btn-group radio-group" data-toggle="buttons">
                    <label class="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                      <a>—</a>
                    </label>
                    <label class="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                      <a>+</a>
                    </label>
                  </div>
                </td>
                <td>15$</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Remove item"
                  >
                    X
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3"></td>
                <td>
                  <h4>
                    <strong>Tổng Tiền</strong>
                  </h4>
                </td>
                <td>
                  <h4>
                    <strong>15$</strong>
                  </h4>
                </td>
                <td colSpan="3">
                  <button
                    type="button"
                    class="btn btn-primary waves-effect waves-light"
                  >
                    Complete purchase
                    <i class="fa fa-angle-right right"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Cart;
