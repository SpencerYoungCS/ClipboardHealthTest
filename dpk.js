const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidateKey = TRIVIAL_PARTITION_KEY;

  // return early pattern
  if (!event) return candidateKey;

  // candidate length can only exceed 256 if trivial partition key is a string of length > 256
  if (TRIVIAL_PARTITION_KEY.length > MAX_PARTITION_KEY_LENGTH) return Error.prototype.message('Trivial partition key length cannot be greater than max partition length');

  // candidate can only not be a string if event.partitionKey is
  if(event.partitionKey) candidateKey = JSON.stringify(event.partitionKey);
  else 
  {
    const data = JSON.stringify(event);
    candidateKey =  crypto.createHash("sha3-512").update(data).digest("hex");
  }

  // candidate will always exist

  // if(partitionKey) 
  // {
  //   candidateKey = TRIVIAL_PARTITION_KEY;
  // }
  // else
  // {
  //   // if partiion key doesn't exist, it doesnt matter, event gets stringified
  //   const data = JSON.stringify(event);
  //   candidateKey =  crypto.createHash("sha3-512").update(data).digest("hex");
  // }

  return candidateKey;
};