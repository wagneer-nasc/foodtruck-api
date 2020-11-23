import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1605212332393 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'images',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',

                    },
                    {
                        name: 'path',
                        type: 'varchar',

                    },
                    {
                        name: 'store_id',
                        type: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'

                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'

                    },
                ],
                foreignKeys: [
                    {
                        name: 'ImageStore',
                        columnNames: ['store_id'],
                        referencedTableName: 'stores',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    }
                ]
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
