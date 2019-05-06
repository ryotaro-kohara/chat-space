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
|name|varchar(15)|null: false|

### Association
- has_many :tweets
- has_many :groups, through: :users_groups
- has_many :users_groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|varchar(100)|null: false|
|user|refference|null: false, foreign_key: true|
|group|refference|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|varchar(20)|null: false|

### Association
- has_many :tweets
- has_many :user, through: :users_groups
- has_many :users_groups

# users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user|refference|null: false, foreign_key: true|
|group|refference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user