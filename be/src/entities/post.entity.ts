import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'post_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  content: string;

  @Column({
    nullable: false,
    default: 0
  })
  clickcount: number;

  @Column({type: 'bigint', nullable: true})
  box_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
