# ベースイメージ
FROM node:18

# 作業ディレクトリを作成
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリコードをコピー
COPY . .

# 必要であればビルド（Reactとか使う場合）
# RUN npm run build

# ポート開放（Expressが3000で動くなら）
EXPOSE 3000

# アプリ起動
CMD ["npm", "run", "dev"]
