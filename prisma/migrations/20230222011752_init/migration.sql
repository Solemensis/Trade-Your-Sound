-- CreateTable
CREATE TABLE "ProducerProfile" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "categories" TEXT[],
    "equipment" TEXT[],
    "relatedLinks" JSONB NOT NULL,
    "description" TEXT,
    "lister_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "LFopportunity" BOOLEAN NOT NULL,
    "showProfile" BOOLEAN NOT NULL,
    "terms" BOOLEAN NOT NULL,

    CONSTRAINT "ProducerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AudioListings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "processing" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lister_id" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_name" TEXT NOT NULL,
    "producer_id" INTEGER NOT NULL,

    CONSTRAINT "AudioListings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRooms" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "room_name" TEXT NOT NULL,
    "user1_id" TEXT NOT NULL,
    "user2_id" TEXT NOT NULL,
    "user1_deleted" JSONB NOT NULL,
    "user2_deleted" JSONB NOT NULL,
    "user1_nick" TEXT NOT NULL,
    "user2_nick" TEXT NOT NULL,
    "listing_path" TEXT,

    CONSTRAINT "ChatRooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "lister_id" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL,
    "room_id" INTEGER NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opinions" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,

    CONSTRAINT "Opinions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProducerProfile_user_name_key" ON "ProducerProfile"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "ProducerProfile_lister_id_key" ON "ProducerProfile"("lister_id");

-- AddForeignKey
ALTER TABLE "AudioListings" ADD CONSTRAINT "AudioListings_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "ProducerProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "ChatRooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
