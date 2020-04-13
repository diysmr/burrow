// source: permission.proto
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
goog.exportSymbol('proto.permission.AccountPermissions', null, global);
goog.exportSymbol('proto.permission.BasePermissions', null, global);
goog.exportSymbol('proto.permission.PermArgs', null, global);
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
proto.permission.AccountPermissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.permission.AccountPermissions.repeatedFields_, null);
};
goog.inherits(proto.permission.AccountPermissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.permission.AccountPermissions.displayName = 'proto.permission.AccountPermissions';
}
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
proto.permission.BasePermissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.permission.BasePermissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.permission.BasePermissions.displayName = 'proto.permission.BasePermissions';
}
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
proto.permission.PermArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.permission.PermArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.permission.PermArgs.displayName = 'proto.permission.PermArgs';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.permission.AccountPermissions.repeatedFields_ = [2];



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
proto.permission.AccountPermissions.prototype.toObject = function(opt_includeInstance) {
  return proto.permission.AccountPermissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.permission.AccountPermissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.permission.AccountPermissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    base: (f = msg.getBase()) && proto.permission.BasePermissions.toObject(includeInstance, f),
    rolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.permission.AccountPermissions}
 */
proto.permission.AccountPermissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.permission.AccountPermissions;
  return proto.permission.AccountPermissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.permission.AccountPermissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.permission.AccountPermissions}
 */
proto.permission.AccountPermissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.permission.BasePermissions;
      reader.readMessage(value,proto.permission.BasePermissions.deserializeBinaryFromReader);
      msg.setBase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
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
proto.permission.AccountPermissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.permission.AccountPermissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.permission.AccountPermissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.permission.AccountPermissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.permission.BasePermissions.serializeBinaryToWriter
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional BasePermissions Base = 1;
 * @return {?proto.permission.BasePermissions}
 */
proto.permission.AccountPermissions.prototype.getBase = function() {
  return /** @type{?proto.permission.BasePermissions} */ (
    jspb.Message.getWrapperField(this, proto.permission.BasePermissions, 1));
};


/**
 * @param {?proto.permission.BasePermissions|undefined} value
 * @return {!proto.permission.AccountPermissions} returns this
*/
proto.permission.AccountPermissions.prototype.setBase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.permission.AccountPermissions} returns this
 */
proto.permission.AccountPermissions.prototype.clearBase = function() {
  return this.setBase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.AccountPermissions.prototype.hasBase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string Roles = 2;
 * @return {!Array<string>}
 */
proto.permission.AccountPermissions.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.permission.AccountPermissions} returns this
 */
proto.permission.AccountPermissions.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.permission.AccountPermissions} returns this
 */
proto.permission.AccountPermissions.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.permission.AccountPermissions} returns this
 */
proto.permission.AccountPermissions.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};





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
proto.permission.BasePermissions.prototype.toObject = function(opt_includeInstance) {
  return proto.permission.BasePermissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.permission.BasePermissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.permission.BasePermissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    perms: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    setbit: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.permission.BasePermissions}
 */
proto.permission.BasePermissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.permission.BasePermissions;
  return proto.permission.BasePermissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.permission.BasePermissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.permission.BasePermissions}
 */
proto.permission.BasePermissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPerms(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSetbit(value);
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
proto.permission.BasePermissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.permission.BasePermissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.permission.BasePermissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.permission.BasePermissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 Perms = 1;
 * @return {number}
 */
proto.permission.BasePermissions.prototype.getPerms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.permission.BasePermissions} returns this
 */
proto.permission.BasePermissions.prototype.setPerms = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.BasePermissions} returns this
 */
proto.permission.BasePermissions.prototype.clearPerms = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.BasePermissions.prototype.hasPerms = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 SetBit = 2;
 * @return {number}
 */
proto.permission.BasePermissions.prototype.getSetbit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.permission.BasePermissions} returns this
 */
proto.permission.BasePermissions.prototype.setSetbit = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.BasePermissions} returns this
 */
proto.permission.BasePermissions.prototype.clearSetbit = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.BasePermissions.prototype.hasSetbit = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.permission.PermArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.permission.PermArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.permission.PermArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.permission.PermArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    target: msg.getTarget_asB64(),
    permission: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    role: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    value: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.permission.PermArgs}
 */
proto.permission.PermArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.permission.PermArgs;
  return proto.permission.PermArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.permission.PermArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.permission.PermArgs}
 */
proto.permission.PermArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTarget(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPermission(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
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
proto.permission.PermArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.permission.PermArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.permission.PermArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.permission.PermArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint64 Action = 1;
 * @return {number}
 */
proto.permission.PermArgs.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.setAction = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.clearAction = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.PermArgs.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes Target = 2;
 * @return {!(string|Uint8Array)}
 */
proto.permission.PermArgs.prototype.getTarget = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Target = 2;
 * This is a type-conversion wrapper around `getTarget()`
 * @return {string}
 */
proto.permission.PermArgs.prototype.getTarget_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTarget()));
};


/**
 * optional bytes Target = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTarget()`
 * @return {!Uint8Array}
 */
proto.permission.PermArgs.prototype.getTarget_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTarget()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.setTarget = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.clearTarget = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.PermArgs.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 Permission = 3;
 * @return {number}
 */
proto.permission.PermArgs.prototype.getPermission = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.setPermission = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.clearPermission = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.PermArgs.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Role = 4;
 * @return {string}
 */
proto.permission.PermArgs.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.setRole = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.clearRole = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.PermArgs.prototype.hasRole = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool Value = 5;
 * @return {boolean}
 */
proto.permission.PermArgs.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.permission.PermArgs} returns this
 */
proto.permission.PermArgs.prototype.clearValue = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.permission.PermArgs.prototype.hasValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.permission);
