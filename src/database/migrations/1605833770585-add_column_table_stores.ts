import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnTableUsers1605833770585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('stores', new TableColumn({
            name: 'contact',
            type: 'varchar',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('stores', 'contact');
    }

}
