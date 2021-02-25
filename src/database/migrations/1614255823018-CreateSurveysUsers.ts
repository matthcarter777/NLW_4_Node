import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSurveysUsers1614255823018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveysUsers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "survey_id",
                        type: "uuid",
                    },
                    {
                        name: "value",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            'surveysUsers',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );

        await queryRunner.createForeignKey(
            'surveysUsers',
            new TableForeignKey({
              columnNames: ['survey_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'surveys',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveysUsers");
    }

}
