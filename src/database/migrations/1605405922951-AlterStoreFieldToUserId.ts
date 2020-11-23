import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AlterStoreFieldToUserId1605405922951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('stores', new TableColumn({
            name: 'user_id',
            type: 'uuid',
            isNullable: true,

        }));
        await queryRunner.createForeignKey('stores', new TableForeignKey({
            name: 'StoreUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('stores', 'StoreUser');
        await queryRunner.dropColumn('stores', 'user_id');
    }

}
