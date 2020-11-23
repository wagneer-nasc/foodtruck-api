import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterDeliveryColumnTableStores1605840592068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('stores', 'delivery');

        await queryRunner.addColumn('stores', new TableColumn({
            name: 'is_delivery',
            type: 'varchar',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('stores', new TableColumn({
            name: 'delivery',
            type: 'boolean',
            default: false,
        }));

        await queryRunner.dropColumn('stores', 'is_delivery');

    }

}
