import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostBox {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'postbox_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;
}
