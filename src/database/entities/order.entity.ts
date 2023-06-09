import { OrderDetails, Product } from '../../database/entities';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../../constants/orderstatus.enum';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  orderDate: Date;

  @Column({ type: 'date' })
  expectedDeliveryDate: Date;

  @Column({ default: 'Pending' })
  orderStatus: OrderStatus;

  @Column()
  shippingAddress: string;

  @Column()
  userId: number;

  // @ManyToMany(() => Product)
  // @JoinTable({
  //   name: 'order_details',
  //   joinColumn: {
  //     name: 'order_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'product_id',
  //     referencedColumnName: 'productId',
  //   },
  // })
  // products?: Product[];

  @OneToMany(() => OrderDetails, (orderDetail) => orderDetail.order)
  public orderDetails: OrderDetails[];
}
