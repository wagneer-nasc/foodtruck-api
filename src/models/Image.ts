import {
    Column, Entity, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn
} from 'typeorm'

import Store from './Store';

@Entity('images')
class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @ManyToOne(() => Store, store => store.images)
    @JoinColumn({ name: 'store_id' })
    store: Store;

    @UpdateDateColumn()
    updated_at: Date

    @CreateDateColumn()
    created_at: Date
}

export default Image