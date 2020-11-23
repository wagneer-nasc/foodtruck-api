import {
   Column, Entity, PrimaryGeneratedColumn,
   CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne
} from 'typeorm'
import Image from './Image';
import User from './User';

@Entity('stores')
class Store {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   user_id: string;

   @OneToOne(() => User)
   @JoinColumn({ name: 'user_id' })
   user: User;

   @Column()
   name: string;

   @Column()
   address: string;

   @Column()
   description: string;

   @Column()
   opening_hours: string;

   @Column()
   opening_days: string;

   @Column()
   is_delivery: string;

   @Column()
   contact: string;

   @UpdateDateColumn()
   updated_at: Date

   @CreateDateColumn()
   created_at: Date

   @OneToMany(() => Image, image => image.store, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'store_id' })
   images: Image[];
}

export default Store