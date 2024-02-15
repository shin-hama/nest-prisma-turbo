# Nest.js with turborepo and Prisma

Nest.js を使ってモノレポを構築したときに、Prisma を読み込もうとしたらうまく動かなかったのでやりかたを確認した。

## 結論

- 外部パッケージを CommonJs モジュールとしてビルドする
- ビルドするタイミングはプロジェクト全体の preinstall 時??
  - ちゃんと検証してないが、このタイミングなら動いた
  - ビルドする前に Prisma のスキーマを生成しておく必要もある
  - `"preinstall": "prisma generate && tsc"`

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
