<template>
  <div class="element-wrapper">
    <div class="element-box">
      <form id="formValidate" novalidate="true">
        <div class="element-info">
          <div class="element-info-with-icon">
            <div class="element-info-icon">
              <div class="os-icon os-icon-wallet-loaded"></div>
            </div>
            <div class="element-info-text">
              <h5 class="element-inner-header">
                Profile Settings
              </h5>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for=""> Email address</label><input class="form-control" data-error="Your email address is invalid" placeholder="Enter email" required="required" type="email">
          <div class="help-block form-text with-errors form-control-feedback"></div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for=""> Password</label><input class="form-control" data-minlength="6" placeholder="Password" required="required" type="password">
              <div class="help-block form-text text-muted form-control-feedback">
                Minimum of 6 characters
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="">Confirm Password</label><input class="form-control" data-match-error="Passwords don't match" placeholder="Confirm Password" required="required" type="password">
              <div class="help-block form-text with-errors form-control-feedback"></div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for=""> Regular select</label><select class="form-control">
          <option value="New York">
            New York
          </option>
          <option value="California">
            California
          </option>
          <option value="Boston">
            Boston
          </option>
          <option value="Texas">
            Texas
          </option>
          <option value="Colorado">
            Colorado
          </option>
        </select>
        </div>
        <div class="form-check">
          <label class="form-check-label"><input class="form-check-input" type="checkbox">I agree to terms and conditions</label>
        </div>
        <div class="form-buttons-w">
          <button class="btn btn-primary disabled" type="submit"> Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "profile-settings"
    }
</script>

<style scoped>

</style>
