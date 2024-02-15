# Nest.js with turborepo and Prisma

Nest.js を使ってモノレポを構築したときに、Prisma を読み込もうとしたらうまく動かなかったのでやりかたを確認した。

## 結論

- Nest.js が参照する外部パッケージを CommonJs モジュールとしてビルドする必要がある
- ビルドするタイミングはいつでも良いが、`dev` コマンドで一緒にビルドするのが楽
  - ビルドする前に Prisma のスキーマを生成しておく必要もあるので注意
  - `"dev": "prisma generate && tsc --watch"`

## dev

1. DB コンテナを起動

    ```sh
    cd docker
    docker-compose up -d
    ```

2. 依存関係のインストール

    ```sh
    pnpm install
    ```

3. DB の初期化
   1. レコードは `prisma studio` などで適当にいれること

    ```sh
    pnpm db:push
    ```

4. 開発サーバーの起動

    ```sh
    pnpm dev
    ```

5. API のテスト

    ```sh
    curl http://localhost:8901/users
    ```
