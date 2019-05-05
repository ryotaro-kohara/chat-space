# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|varchar(15)|null: false|
|tweet_id|integer|null: false, foreign_key: true|

### Association
- has_many :tweets
- has_many :groups, through: :users_groups

## tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|varchar(100)|null: false|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|varchar(20)|null: false|

### Association
- has_many :tweets
- has_many :user, through: :users_groups

# users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user