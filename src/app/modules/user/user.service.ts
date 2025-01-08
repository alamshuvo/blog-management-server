import { userModel } from '../auth/auth.model';

const updateBlockUser = async (userId: string) => {
  const updatePayload = { isBlocked: true };
  const result = await userModel.findByIdAndUpdate(
    { _id: userId },
    updatePayload,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const userService = {
  updateBlockUser,
};
