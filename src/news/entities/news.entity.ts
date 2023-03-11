import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("news")
export class News {
   @PrimaryColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    photo: string;
}
 