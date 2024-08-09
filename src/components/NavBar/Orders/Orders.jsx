import React from "react";
import { useAppContext } from "../../Context/Context.jsx";
import './Orders.css'

const OrderList = () => {
    const { order } = useAppContext();

    // Función para calcular el total de la cantidad y el precio total
    const calculateTotals = (books) => {
        let totalQuantity = 0;
        let totalPrice = 0;

        books.forEach(book => {
            const quantity = book.quantity || 0;
            const price = book.want_to_read_count || 0;

            totalQuantity += quantity;
            totalPrice += (quantity * price)/10;
        });

        return { totalQuantity, totalPrice };
    };

    return (
        <div>
            {order.map(orderItem => {
                // Calcular totales para cada pedido
                const { totalQuantity, totalPrice } = calculateTotals(orderItem.books);

                return (
                    <div key={orderItem.id} className="table-container">
                        <h2>Order ID: {orderItem.id}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Precio total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItem.books.map(bookItem => (
                                    <tr key={bookItem.id}>
                                        <td>{Array.isArray(bookItem.title) ? bookItem.title.join(', ') : bookItem.title || 'No title available'}</td>
                                        <td>{Array.isArray(bookItem.author_name) ? bookItem.author_name.join(', ') : bookItem.author_name || 'No author available'}</td>
                                        <td>{bookItem.want_to_read_count/10 || 'No price available'}</td>
                                        <td>{bookItem.quantity || 0}</td>
                                        <td>{((bookItem.want_to_read_count/10 || 0) * (bookItem.quantity || 0)).toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3"></td>
                                    <td><strong>Total Cantidad:</strong></td>
                                    <td><strong>{totalQuantity}</strong></td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td><strong>Total Precio:</strong></td>
                                    <td><strong>{totalPrice.toFixed(2)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderList;