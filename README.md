para criar o banco de dados com o docker:

```bash
docker run --name prisma -e POSTGRES_DB=prisma -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```

para rodar as migrations:

```bash
yarn prisma migrate dev
```

para ver as tabelas:

```bash
yarn prisma studio
```
