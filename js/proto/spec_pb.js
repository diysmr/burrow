// source: spec.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js');
goog.object.extend(proto, github_com_gogo_protobuf_gogoproto_gogo_pb);
var crypto_pb = require('./crypto_pb.js');
goog.object.extend(proto, crypto_pb);
var balance_pb = require('./balance_pb.js');
goog.object.extend(proto, balance_pb);
goog.exportSymbol('proto.spec.TemplateAccount', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spec.TemplateAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spec.TemplateAccount.repeatedFields_, null);
};
goog.inherits(proto.spec.TemplateAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spec.TemplateAccount.displayName = 'proto.spec.TemplateAccount';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spec.TemplateAccount.repeatedFields_ = [4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spec.TemplateAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.spec.TemplateAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spec.TemplateAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spec.TemplateAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: msg.getAddress_asB64(),
    publickey: (f = msg.getPublickey()) && crypto_pb.PublicKey.toObject(includeInstance, f),
    amountsList: jspb.Message.toObjectList(msg.getAmountsList(),
    balance_pb.Balance.toObject, includeInstance),
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    rolesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    code: msg.getCode_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spec.TemplateAccount}
 */
proto.spec.TemplateAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spec.TemplateAccount;
  return proto.spec.TemplateAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spec.TemplateAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spec.TemplateAccount}
 */
proto.spec.TemplateAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 3:
      var value = new crypto_pb.PublicKey;
      reader.readMessage(value,crypto_pb.PublicKey.deserializeBinaryFromReader);
      msg.setPublickey(value);
      break;
    case 4:
      var value = new balance_pb.Balance;
      reader.readMessage(value,balance_pb.Balance.deserializeBinaryFromReader);
      msg.addAmounts(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissions(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spec.TemplateAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spec.TemplateAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spec.TemplateAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spec.TemplateAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPublickey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      crypto_pb.PublicKey.serializeBinaryToWriter
    );
  }
  f = message.getAmountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      balance_pb.Balance.serializeBinaryToWriter
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.spec.TemplateAccount.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes Address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.spec.TemplateAccount.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Address = 2;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.spec.TemplateAccount.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes Address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.spec.TemplateAccount.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional crypto.PublicKey PublicKey = 3;
 * @return {?proto.crypto.PublicKey}
 */
proto.spec.TemplateAccount.prototype.getPublickey = function() {
  return /** @type{?proto.crypto.PublicKey} */ (
    jspb.Message.getWrapperField(this, crypto_pb.PublicKey, 3));
};


/**
 * @param {?proto.crypto.PublicKey|undefined} value
 * @return {!proto.spec.TemplateAccount} returns this
*/
proto.spec.TemplateAccount.prototype.setPublickey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.clearPublickey = function() {
  return this.setPublickey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.spec.TemplateAccount.prototype.hasPublickey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated balance.Balance Amounts = 4;
 * @return {!Array<!proto.balance.Balance>}
 */
proto.spec.TemplateAccount.prototype.getAmountsList = function() {
  return /** @type{!Array<!proto.balance.Balance>} */ (
    jspb.Message.getRepeatedWrapperField(this, balance_pb.Balance, 4));
};


/**
 * @param {!Array<!proto.balance.Balance>} value
 * @return {!proto.spec.TemplateAccount} returns this
*/
proto.spec.TemplateAccount.prototype.setAmountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.balance.Balance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.balance.Balance}
 */
proto.spec.TemplateAccount.prototype.addAmounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.balance.Balance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.clearAmountsList = function() {
  return this.setAmountsList([]);
};


/**
 * repeated string Permissions = 5;
 * @return {!Array<string>}
 */
proto.spec.TemplateAccount.prototype.getPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * repeated string Roles = 6;
 * @return {!Array<string>}
 */
proto.spec.TemplateAccount.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional bytes Code = 7;
 * @return {!(string|Uint8Array)}
 */
proto.spec.TemplateAccount.prototype.getCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes Code = 7;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.spec.TemplateAccount.prototype.getCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCode()));
};


/**
 * optional bytes Code = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.spec.TemplateAccount.prototype.getCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.spec.TemplateAccount} returns this
 */
proto.spec.TemplateAccount.prototype.setCode = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


goog.object.extend(exports, proto.spec);
