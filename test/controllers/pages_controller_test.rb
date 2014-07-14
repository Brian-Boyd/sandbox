require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get angular" do
    get :angular
    assert_response :success
  end

  test "should get carousel" do
    get :carousel
    assert_response :success
  end

  test "should get dust" do
    get :dust
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get search" do
    get :search
    assert_response :success
  end

  test "should get ziptastic" do
    get :ziptastic
    assert_response :success
  end

end
