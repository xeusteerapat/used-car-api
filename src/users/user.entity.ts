import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('user created', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('updated user', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('remove user', this.id);
  }
}
